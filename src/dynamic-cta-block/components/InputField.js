// src/dynamic-cta-block/InputField.js

import { __ } from "@wordpress/i18n";
import { TextControl, SelectControl } from "@wordpress/components";
import { Trash2 } from "lucide-react";

export default function InputField({ field, index, onChange, onDelete }) {
	const updateField = (key, value) => {
		onChange(index, { ...field, [key]: value });
	};

	return (
		<div className="input-wrapper dark-mode">
			<div className="input-controls modern-styled-block">
				<TextControl
					label={__("Field Label", "dynamic-cta-block")}
					value={field.label}
					onChange={(value) => updateField("label", value)}
					className="dark-input modern-input"
				/>

				<SelectControl
					label={__("Type", "dynamic-cta-block")}
					value={field.type}
					options={[
						{ label: "Text", value: "text" },
						{ label: "Email", value: "email" },
						{ label: "Textarea", value: "textarea" },
						{ label: "Select", value: "select" },
						{ label: "Checkbox", value: "checkbox" },
						{ label: "Radio", value: "radio" },
					]}
					onChange={(value) => updateField("type", value)}
					className="dark-input modern-select"
				/>

				<button
					className="delete-button dark-button modern-delete"
					onClick={(e) => {
						e.preventDefault();
						onDelete(index);
					}}
					aria-label="Delete field"
				>
					<Trash2 size={18} />
				</button>
			</div>
		</div>
	);
}
