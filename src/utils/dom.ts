import Block from './block';

export default function renderDOM(query: string, block: Block, className?: string) {
  const root = document.querySelector(query);

  if (root) {
    if (className) {
      block.getContent()?.classList.add(className)
    }
    root.appendChild(block.getContent()!);
  }
  return root;
}

export function addToBlock(block: Block, className: string, child: Block, childClass: string ) {
  let root = block.getContent()?.querySelector(className)
  if (childClass) {
    child.getContent()!.classList.add(childClass)
  }
  root?.appendChild(child.getContent()!)
}