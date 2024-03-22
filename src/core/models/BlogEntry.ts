/**
 * BlogEntry model
 * @class
 * @public
 * @property {string} title - The title of the blog entry
 * @property {string} date - The date of the blog entry
 * @property {string} author - The author of the blog entry
 * @property {string[]} tags - The tags of the blog entry
 * @property {string} content - The content of the blog entry
 *
 * @example
 * const blogEntry = new BlogEntry(
 * 	"Hello World",
 * 	"2021-01-01",
 * 	"John Doe",
 * 	["hello", "world"],
 * 	"Hello, world!"
 * );
 */
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
