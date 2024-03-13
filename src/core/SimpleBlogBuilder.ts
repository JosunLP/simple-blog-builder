import { SimpleBlog } from "./controller/SimpleBlog.js";

/**
 * Simple blog builder
 *
 * @class SimpleBlogBuilder
 * @description The core class for building a simple blog. It is used to create a simple blog object, wich will be used in the framework components.
 *
 * @example
 */
export default class SimpleBlogBuilder {
	private _title: string;
	private _content: string;

	constructor() {
		this._title = "";
		this._content = "";
	}

	public init(config: { title: string; content: string }): SimpleBlogBuilder {
		this._title = config.title;
		this._content = config.content;
		return this;
	}

	build(): SimpleBlog {
		return new SimpleBlog(this._title, this._content);
	}
}
