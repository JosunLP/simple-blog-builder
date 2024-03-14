import { BlogEntry } from "../types/BlogEntry.type.js";

/**
 * Md reader
 * @description Reads md file to json
 */
export class MdReader {
	/**
	 * Reads md file to json
	 * @param mdFile
	 * @returns md file to json in BlogEntry format
	 */
	public static readMdFileToJSON(mdFile: File): BlogEntry {
		const headerStart = "$HEADER";
		const headerEnd = "$HEADER END";

		const reader = new FileReader();
		reader.readAsText(mdFile);

		while (reader.readyState !== 2) {
			setTimeout(() => {}, 1000);
		}

		const fileContent = reader.result as string;
		const header = fileContent.substring(
			fileContent.indexOf(headerStart) + headerStart.length,
			fileContent.indexOf(headerEnd),
		);
		const headerLines = header.split("\n");
		const content = fileContent.substring(
			fileContent.indexOf(headerEnd) + headerEnd.length,
		);

		const blogEntry: BlogEntry = {
			title: "",
			date: "",
			tags: [],
			author: "",
			content: "",
		};

		headerLines.forEach((line) => {
			const [key, value] = line.toLocaleLowerCase().split(": ");
			switch (key) {
				case "title":
					blogEntry.title = value;
					break;
				case "date":
					blogEntry.date = value;
					break;
				case "author":
					blogEntry.author = value;
					break;
				case "tags":
					blogEntry.tags = value.replaceAll(" ", "").split(",");
					break;
			}
		});

		blogEntry.content = MdReader.markdownToHtml(content);

		return blogEntry;
	}

	/**
	 * Markdowns to html
	 * @param markdown
	 * @returns to html
	 */
	private static markdownToHtml(markdown: string): string {
		// Ersetze Überschriften (#) mit <h1>
		markdown = markdown.replaceAll(/^#\s+(.+)/gm, "<h1>$1</h1>");

		// Ersetze Überschriften (##) mit <h2>
		markdown = markdown.replaceAll(/##\s+(.+)/g, "<h2>$1</h2>");

		// Ersetze Überschriften (###) mit <h3>
		markdown = markdown.replaceAll(/###\s+(.+)/g, "<h3>$1</h3>");

		// Ersetze Überschriften (####) mit <h4>
		markdown = markdown.replaceAll(/####\s+(.+)/g, "<h4>$1</h4>");

		// Ersetze Überschriften (#####) mit <h5>
		markdown = markdown.replaceAll(/#####\s+(.+)/g, "<h5>$1</h5>");

		// Ersetze fette Texte (**text**) mit <strong>
		markdown = markdown.replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

		// Ersetze kursiven Text (_text_) mit <em>
		markdown = markdown.replaceAll(/_(.*?)_/g, "<em>$1</em>");

		// Ersetze Listen (* Element) mit <ul> und <li>
		markdown = markdown.replaceAll(/^\*\s+(.*)$/gm, "<li>$1</li>");
		markdown = markdown.replaceAll(/(<\/li>\s*<li>)+/g, "</li><li>");
		markdown = markdown.replaceAll(/<li>(.+)<\/li>/g, "<ul><li>$1</li></ul>");

		// Ersetze Links ([Text](URL)) mit <a>
		markdown = markdown.replaceAll(
			/\[([^\]]+)\]\(([^)]+)\)/g,
			'<a href="$2">$1</a>',
		);

		// Ersetze Zeilenumbrüche mit <br>
		markdown = markdown.replaceAll(/(?:\r\n|\r|\n)/g, "<br>");

		// Ersetze Codeblöcke (```language) mit <pre> und <code>
		markdown = markdown.replaceAll(/```(.+)/g, '<pre><code class="$1">');
		markdown = markdown.replaceAll(/```/g, "</code></pre>");

		// Ersetze Inline-Code (`code`) mit <code>
		markdown = markdown.replaceAll(/`([^`]+)`/g, "<code>$1</code>");

		// Ersetze Bilder (![Alt-Text](URL)) mit <img>
		markdown = markdown.replaceAll(
			/!\[([^\]]+)\]\(([^)]+)\)/g,
			'<img src="$2" alt="$1">',
		);

		// Ersetze Zitate (>) mit <blockquote>
		markdown = markdown.replaceAll(
			/^>\s+(.*)$/gm,
			"<blockquote>$1</blockquote>",
		);

		// Ersetze horizontale Linien (---) mit <hr>
		markdown = markdown.replaceAll(/---/g, "<hr>");

		// Ersetze Absätze mit <p>
		markdown = markdown.replaceAll(
			/^(?!<h|<ul|<li|<a|<pre|<code|<img|<blockquote|<hr)(.*)$/gm,
			"<p>$1</p>",
		);
		return markdown;
	}
}
