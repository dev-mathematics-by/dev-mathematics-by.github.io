/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.41 24 December 2001	          *
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=9;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=150;				// Menu offset x coordinate
	var StartLeft=1;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"



Menu1=new Array("�������","index.html","",0,20,240);


Menu2=new Array("���������","#","",3,20,240);
	Menu2_1=new Array("���������� � ��������","podgotovka_k_ekzamenu.html","",0,20,250);	
	Menu2_2=new Array("������������ � ������������� ������ � ������� �����","pomosch_reshenii_zadach.html","",0,35,220);
	Menu2_3=new Array("������ � ������� ����������� � �������� �����","#","",2,35,220);
		Menu2_3_1=new Array("����������","#","",2,20,220);
			Menu2_3_1_1=new Array("������� � ����","uslovia_i_ceny.html","",0,20,220);
			Menu2_3_1_2=new Array("������� ������� �����","#","",5,20,220);
				Menu2_3_1_2_1=new Array("�������� �������, ������������� ���������, �������, �����������","pdf/8a.pdf","",0,35,220);
				Menu2_3_1_2_2=new Array("���, ���������, ���������������� ���������","pdf/8b.pdf","",0,35,220);
				Menu2_3_1_2_3=new Array("�������, �������, ������������� ���������, ������� ������ ����, ����","pdf/8c.pdf","",0,50,220);
				Menu2_3_1_2_4=new Array("�����, �������������� ����������������","pdf/8d.pdf","",0,35,220);
				Menu2_3_1_2_5=new Array("���","pdf/8e.pdf","",0,20,220);
		Menu2_3_2=new Array("����������� � ����������������","#","",1,20,220);
			Menu2_3_2_1=new Array("������� ������� �����","pdf/9.pdf","",0,20,220);


Menu3=new Array("������������","#","",3);
	Menu3_1=new Array("������� � ����","uslovia_i_ceny2.html","",0,20,280);
	Menu3_2=new Array("�������� ������������ � ���������� ��","metodika_prepodavania.html","",0,20,280);
	Menu3_3=new Array("������� �� (������� ����)","#","",4,20,280);
		Menu3_3_1=new Array("���� 1 (������)","pdf/3.pdf","",0,20,220);
		Menu3_3_2=new Array("���� 2 (�������)","pdf/4.pdf","",0,20,220);
		Menu3_3_3=new Array("���� 3 (�����������)","pdf/5.pdf","",0,20,220);
		Menu3_3_4=new Array("������ � ������","pdf/6.pdf","",0,20,220);

Menu4=new Array("����������","shkolnikam.html","",0,20,240);


Menu5=new Array("��� ���","about.html","",0,20,240);


Menu6=new Array("������� �������","cabinet.html","",0,20,240);


Menu7=new Array("���������� ����������","contact.html","",0,20,240);


Menu8=new Array("��������������","map.html","",0,20,240);


Menu9=new Array("����������� � ��������������","cooperation.html","",0,20,240);


