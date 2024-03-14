import { BlogEntry } from "../types/BlogEntry.type.js";

export class MdReader {
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
			fileContent.indexOf(headerEnd)
		);
		const headerLines = header.split("\n");
		const content = fileContent.substring(
			fileContent.indexOf(headerEnd) + headerEnd.length
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

	private static markdownToHtml(markdown: string): string {
		markdown = markdown.replaceAll(/\n/g, "<br>");
		markdown = markdown.replaceAll(/`([^`]+)`/g, "<code>$1</code>");
		markdown = markdown.replaceAll(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");
		markdown = markdown.replaceAll(/(\*|_)(.*?)\1/g, "<em>$2</em>");
		markdown = markdown.replaceAll(/~~(.*?)~~/g, "<del>$1</del>");
		markdown = markdown.replaceAll(
			/!\[(.*?)\]\((.*?)\)/g,
			"<img src='$2' alt='$1'>"
		);
		markdown = markdown.replaceAll(
			/\[(.*?)\]\((.*?)\)/g,
			"<a href='$2'>$1</a>"
		);
		markdown = markdown.replaceAll(/^# (.*?)/g, "<h1>$1</h1>");
		markdown = markdown.replaceAll(/^## (.*?)/g, "<h2>$1</h2>");
		markdown = markdown.replaceAll(/^### (.*?)/g, "<h3>$1</h3>");
		markdown = markdown.replaceAll(/^#### (.*?)/g, "<h4>$1</h4>");
		markdown = markdown.replaceAll(/^##### (.*?)/g, "<h5>$1</h5>");
		markdown = markdown.replaceAll(/^###### (.*?)/g, "<h6>$1</h6>");
		markdown = markdown.replaceAll(/^\* (.*?)/g, "<li>$1</li>");
		markdown = markdown.replaceAll(/^1. (.*?)/g, "<li>$1</li>");
		return markdown;
	}
}
