function filterProductByCategory(category) {
   
   var arr=['all','women','men','kid','accessories','cosmetic'];
   var arrr=['data1','data2','data3','data4','data5','data6'];
  for(var i=0;i<arr.length;i++)
  {
    if(category==arr[0])
    {
        document.getElementById(arrr[i]).style.display = "block";
    }
 else  if(category==arr[i])
    {
        document.getElementById(arrr[i]).style.display = "block";
    }
    else
    {
        document.getElementById(arrr[i]).style.display = "none";
    
   }
}
}
