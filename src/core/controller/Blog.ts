import { BlogEntry } from "../models/BlogEntry.js";
import { ConfigObject } from "../types/ConfigObject.type";
import { MdReader } from "./MdReader.js";

/**
 * Blog
 *
 * @class Blog
 * @description The core class for the blog. It is used to create a blog object, wich will be used in the framework components.
 *
 * @example
 */
export class Blog {
	private readonly config: ConfigObject;
	private entries: BlogEntry[] = [];

	constructor(config: ConfigObject) {
		this.config = config;
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {ConfigObject} The configuration object
	 */
	public loadEntries(files: File[]): void {
		files.forEach((file) => {
			const entry = MdReader.readMdFileToJSON(file);
			this.entries.push(entry);
		});

		this.sortEntriesByDate();
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {ConfigObject} The configuration object
	 */
	public getEntries(): BlogEntry[] {
		return this.entries;
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {ConfigObject} The configuration object
	 */
	public addEntry(entry: BlogEntry): void {
		this.entries.push(entry);
		this.sortEntriesByDate();
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {ConfigObject} The configuration object
	 */
	private sortEntriesByDate(): void {
		this.entries = this.entries.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
	}
}
