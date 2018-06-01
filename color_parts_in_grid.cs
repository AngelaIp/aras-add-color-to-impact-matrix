// Add Method in ItemType (e.g. Part) -> Server Events -> Event: onAfterGet

for (int i = 0; i < this.getItemCount()-1; i++)
{
    string bg_color_state;
    string myCss = "";
  
    Item thisItem = this.getItemByIndex(i);
    
    string thisStatus = thisItem.getProperty("state","");
    
     // Choose color for 'State'
    switch (thisStatus)
    {
        case "Preliminary":
        case "In Review":
        case "In Change":
            bg_color_state = "#FFFFBB"; // light yellow
            break;
            
        case "Released":
            bg_color_state = "#90EE90"; // light green
            break;
            
        case "Superseded":
        case "Obsolete" :
            bg_color_state = "#90EE90"; // light green
            break;
            
        default:
            bg_color_state = ""; // none
            break;
    }
    
    //  set background color
    if (bg_color_state != "")
    {
         myCss = ".state { background-color: " + bg_color_state + " }"  ;
    }
    
    thisItem.setProperty("css",myCss);
 
}
return this;