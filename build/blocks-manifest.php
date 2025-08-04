<?php
// This file is generated. Do not modify it manually.
return array(
	'dynamic-cta-block' => array(
		'apiVersion' => 2,
		'name' => 'custom/dynamic-cta-form',
		'title' => 'Dynamic CTA Form',
		'category' => 'widgets',
		'icon' => 'feedback',
		'description' => 'A customizable CTA form with dynamic input fields.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Join Our Newsletter'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Subscribe to stay updated!'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Subscribe Now'
			),
			'fields' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Name',
						'type' => 'text'
					),
					array(
						'label' => 'Email',
						'type' => 'email'
					)
				)
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 32
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'editorStyle' => 'file:./index.css'
	)
);
