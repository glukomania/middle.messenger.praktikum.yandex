import Block from './block';

export default function renderDOM(query: string, block: Block, className: string) {
  const root = document.querySelector(query);

  if (root) {
    if (className) {
      block.getContent()!.classList.add(className)
    }

    root.appendChild(block.getContent()!);
  }
  
  return root;
}