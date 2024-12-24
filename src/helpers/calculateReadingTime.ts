export const calculateReadingTime = (layout: any[]) => {
	// Average reading speed (words per minute)
	const WORDS_PER_MINUTE = 200;
  
	let totalWords = 0;
  
	// Recursively extract text from the layout blocks
	const extractText = (node: any): string => {
		if (!node) return '';
    
		if (typeof node === 'string') return node;
    
		if (node.text) return node.text;
    
		if (node.children) {
			return node.children.map(extractText).join(' ');
		}
    
		return '';
	};

	// Process each block in the layout
	layout.forEach(block => {
		if (block.blockType === 'content' && block.columns) {
			block.columns.forEach((column: any) => {
				if (column.richText?.root?.children) {
					const text = column.richText.root.children.map(extractText).join(' ');
					const words = text.trim().split(/\s+/).length;
					totalWords += words;
				}
			});
		}
	});

	const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
	return minutes;
};