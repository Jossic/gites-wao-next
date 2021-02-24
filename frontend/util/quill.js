export const QuillModules = {
	toolbar: [
		[
			// { header: '1' },
			// { header: '2' },
			{ header: [1, 2, 3, 4, 5, 6] },
			{ font: [] },
		],
		[{ size: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30] }],
		[{ color: ['black', 'white', 'red', 'blue', 'green', 'yellow'] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image', 'video'],
		// ['clean'],
		['code-block'],
		['code'],
		// ['✔'],
	],
};

export const QuillFormats = [
	'header',
	'font',
	'size',
	'color',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image',
	'video',
	'code-block',
	'code',
	// '✔',
];
