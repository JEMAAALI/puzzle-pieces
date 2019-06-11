 
var Panel_Big_Image:GameObject; 
var x=0; 
function Start () 
{

}

function Enlarge ()  
{
 x=x+1;
 if(x==1)
 {
 Panel_Big_Image.SetActive(true);
 }
 if(x==2)
 {
 Panel_Big_Image.SetActive(false);
 x=0;
 }
}