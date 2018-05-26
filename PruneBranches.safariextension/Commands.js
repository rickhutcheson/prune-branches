function handleMessage(theMessageEvent) {
    if (theMessageEvent.name === "pruneBranchesMessage") {
        findAndDeleteBranchElements();
    }
}

/**
 * Query GitHub DOM for branch rows & auto-click their "delete' button
 */
function findAndDeleteBranchElements() {
    const rows = document.querySelectorAll('.branch-summary');
    Array.prototype.filter.call(rows, r => {
        return r.innerHTML.includes('Merged') ||  r.innerHTML.includes('Closed');
    }).forEach(mergedRow => {
        mergedRow.querySelectorAll('.branch-delete').forEach(e => e.click());
    });
}

safari.self.addEventListener("message", handleMessage, false);
