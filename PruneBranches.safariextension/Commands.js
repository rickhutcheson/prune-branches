function handleMessage(theMessageEvent) {
    if (theMessageEvent.name === "pruneBranchesMessage") {
        findAndDeleteBranchElements();
    }
}

/**
 * Query GitHub DOM for branch rows & auto-click their "delete' button
 */
function findAndDeleteBranchElements() {
    const rows = document.querySelectorAll('[data-branch-name]');
    Array.prototype.filter.call(rows, r => {
        return r.innerHTML.includes('Merged') ||  r.innerHTML.includes('Closed');
    }).forEach(mergedRow => {
        mergedRow.querySelector('.js-branch-delete-target').click();
    });
}

safari.self.addEventListener("message", handleMessage, false);
