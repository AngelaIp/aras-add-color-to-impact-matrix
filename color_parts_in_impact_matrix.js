
// Code must be included in Method Express ECO ImpactMatrixGrid
// Add state color in Impact Matrix by modifying RowClass around line 1603/1604

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Original version 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for (var cellName in this.cells) {
	var cell = this.cells[cellName];
	var linkData = cell.getLink();
	if (linkData) {
		this.grid.setLink(rowId, linkData.type, linkData.id, cell.columnIndex);
	}
	var cellBg = cell.getBackgroundColor();
		rowBg.push(cellBg);
}
this.grid.grid.setRowBgColor(rowId, rowBg.join("|"));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Replace above block with this version to add additional cell coloring
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for (var cellName in this.cells) {
	var cell = this.cells[cellName];
	var domValue = cell.getValueFromDom();
	var uiValue = cell.convertValueForUI(domValue);
	var linkData = cell.getLink();
	if (linkData) {
		this.grid.setLink(rowId, linkData.type, linkData.id, cell.columnIndex);
	}

	var cellBg = cell.getBackgroundColor();
		
	if (cellName == "State"){	
	    if (uiValue == "Preliminary" || uiValue == "In Review" || uiValue == "In Change"){
	        cellBg = "#FFFFBB";
	    } else if (uiValue == "Released") {
	        cellBg = "#90EE90";
	    } else if (uiValue == "Superseded" || uiValue == "Obsolete") {
	        cellBg = "#FFBBBB";
	    } else {
	        // do nothing
	    }

	}
		
	rowBg.push(cellBg);
}

this.grid.grid.setRowBgColor(rowId, rowBg.join("|"));
//	this.grid.grid.setRowBgColor(rowId, "#FF00FF|#010101|#040404"); // manual color test