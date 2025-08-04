import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import "./editor.scss";
import "./style.scss";

registerBlockType("custom/dynamic-cta-form", {
	edit: Edit,
	save: Save,
});
