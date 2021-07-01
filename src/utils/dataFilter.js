export const dataFilter = (dataImport) => {
  let tempArr = [];
  let groupSplit = [];
  let groupSplitFinal = [];
  let groupSplitCounter = 1;

  // Filter out items with blank/null name
  dataImport.forEach(list => {
    if (list.name) tempArr.push(list);
  });

  // Sorts array by name
  tempArr.sort((a, b) => {
    // Specifically tailored to naming scheme; will compare number within name
    let first = parseInt(a.name.slice(5));
    let second = parseInt(b.name.slice(5));

    if (first > second) return 1;
    else if (first < second) return -1;
    else return 0;
  })

  // Sorts array further by List ID
  tempArr.sort((a, b) => a.listId - b.listId);

  // Separate array into List ID groups
  tempArr.forEach((list, index) => {
    if (list.listId === groupSplitCounter) groupSplit.push(list);
    else {
      groupSplitFinal.push(groupSplit);
      groupSplit = [];
      groupSplitCounter++;
    }

    // Make sure last item finalizes group split
    if (index === tempArr.length -1) groupSplitFinal.push(groupSplit);
  });

  return groupSplitFinal
}