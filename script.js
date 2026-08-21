document.addEventListener("DOMContentLoaded", () =>{
    // Seleciona o botâo de curtida e o icone de coração 
    const LikeBtn = document.querySelector(". Left-actions  .action-btn:First-child");
    if (!LikeBtn) return;

    const likSvg = LikeBtn.querySelector("svg");

    // contador
    let textNode = Array.from(LikeBtn.childnodes). find(
        (node) => node.nodeType === Node. TEXT_NODE && node.textContent.trim() !== ""
    );