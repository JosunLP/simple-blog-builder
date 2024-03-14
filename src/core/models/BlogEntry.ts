export class BlogEntry {
	public title: string;
	public date: string;
	public author: string;
	public tags: string[];
	public content: string;

	constructor(
		title: string,
		date: string,
		author: string,
		tags: string[],
		content: string
	) {
		this.title = title;
		this.date = date;
		this.author = author;
		this.tags = tags;
		this.content = content;
	}
}
