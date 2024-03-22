import { SBBCoreBlogEntry } from "../models/BlogEntry.js";
import { SBBCoreConfig } from "../types/ConfigObject.type";
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
	public readonly config: SBBCoreConfig;
	private entries: SBBCoreBlogEntry[] = [];

	constructor(config: SBBCoreConfig) {
		this.config = config;
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {SBBCoreConfig} The configuration object
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
	 * @returns {SBBCoreConfig} The configuration object
	 */
	public getEntries(): SBBCoreBlogEntry[] {
		return this.entries;
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {SBBCoreConfig} The configuration object
	 */
	public addEntry(entry: SBBCoreBlogEntry): void {
		this.entries.push(entry);
		this.sortEntriesByDate();
	}

	/**
	 * Get the configuration object
	 *
	 * @returns {SBBCoreConfig} The configuration object
	 */
	private sortEntriesByDate(): void {
		this.entries = this.entries.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
	}
}
