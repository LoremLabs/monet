// fix webcomponents + svelte transitions
// https://github.com/sveltejs/svelte/issues/4735#issuecomment-703129877
export default function fix(transtion) {
    return function(node, params){
      if (!node.hasOwnProperty('ownerDocument')) {
        Object.defineProperty(node, 'ownerDocument', { get: function() { return node.parentElement; } });
        let elem = node
        while(elem.parentElement){ elem = elem.parentElement }
        node.parentElement.head = elem
      }
      return transtion(node, params)
    }
}
  
