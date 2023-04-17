var FiltersEnabled = 0; // if your not going to use transitions or filters in any of the tips set this to 0
var spacer="&nbsp; &nbsp; &nbsp; ";

// email notifications to admin
notifyAdminNewMembers0Tip=["", spacer+"No email notifications to admin."];
notifyAdminNewMembers1Tip=["", spacer+"Notify admin only when a new member is waiting for approval."];
notifyAdminNewMembers2Tip=["", spacer+"Notify admin for all new sign-ups."];

// visitorSignup
visitorSignup0Tip=["", spacer+"If this option is selected, visitors will not be able to join this group unless the admin manually moves them to this group from the admin area."];
visitorSignup1Tip=["", spacer+"If this option is selected, visitors can join this group but will not be able to sign in unless the admin approves them from the admin area."];
visitorSignup2Tip=["", spacer+"If this option is selected, visitors can join this group and will be able to sign in instantly with no need for admin approval."];

// historico_vt table
historico_vt_addTip=["",spacer+"This option allows all members of the group to add records to the 'Historico vt' table. A member who adds a record to the table becomes the 'owner' of that record."];

historico_vt_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Historico vt' table."];
historico_vt_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Historico vt' table."];
historico_vt_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Historico vt' table."];
historico_vt_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Historico vt' table."];

historico_vt_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Historico vt' table."];
historico_vt_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Historico vt' table."];
historico_vt_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Historico vt' table."];
historico_vt_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Historico vt' table, regardless of their owner."];

historico_vt_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Historico vt' table."];
historico_vt_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Historico vt' table."];
historico_vt_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Historico vt' table."];
historico_vt_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Historico vt' table."];

// barrios table
barrios_addTip=["",spacer+"This option allows all members of the group to add records to the 'Barrios' table. A member who adds a record to the table becomes the 'owner' of that record."];

barrios_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Barrios' table."];
barrios_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Barrios' table."];
barrios_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Barrios' table."];
barrios_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Barrios' table."];

barrios_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Barrios' table."];
barrios_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Barrios' table."];
barrios_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Barrios' table."];
barrios_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Barrios' table, regardless of their owner."];

barrios_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Barrios' table."];
barrios_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Barrios' table."];
barrios_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Barrios' table."];
barrios_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Barrios' table."];

// comunas table
comunas_addTip=["",spacer+"This option allows all members of the group to add records to the 'Comunas' table. A member who adds a record to the table becomes the 'owner' of that record."];

comunas_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Comunas' table."];
comunas_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Comunas' table."];
comunas_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Comunas' table."];
comunas_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Comunas' table."];

comunas_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Comunas' table."];
comunas_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Comunas' table."];
comunas_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Comunas' table."];
comunas_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Comunas' table, regardless of their owner."];

comunas_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Comunas' table."];
comunas_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Comunas' table."];
comunas_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Comunas' table."];
comunas_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Comunas' table."];

// corregimientos table
corregimientos_addTip=["",spacer+"This option allows all members of the group to add records to the 'Corregimientos' table. A member who adds a record to the table becomes the 'owner' of that record."];

corregimientos_view0Tip=["",spacer+"This option prohibits all members of the group from viewing any record in the 'Corregimientos' table."];
corregimientos_view1Tip=["",spacer+"This option allows each member of the group to view only his own records in the 'Corregimientos' table."];
corregimientos_view2Tip=["",spacer+"This option allows each member of the group to view any record owned by any member of the group in the 'Corregimientos' table."];
corregimientos_view3Tip=["",spacer+"This option allows each member of the group to view all records in the 'Corregimientos' table."];

corregimientos_edit0Tip=["",spacer+"This option prohibits all members of the group from modifying any record in the 'Corregimientos' table."];
corregimientos_edit1Tip=["",spacer+"This option allows each member of the group to edit only his own records in the 'Corregimientos' table."];
corregimientos_edit2Tip=["",spacer+"This option allows each member of the group to edit any record owned by any member of the group in the 'Corregimientos' table."];
corregimientos_edit3Tip=["",spacer+"This option allows each member of the group to edit any records in the 'Corregimientos' table, regardless of their owner."];

corregimientos_delete0Tip=["",spacer+"This option prohibits all members of the group from deleting any record in the 'Corregimientos' table."];
corregimientos_delete1Tip=["",spacer+"This option allows each member of the group to delete only his own records in the 'Corregimientos' table."];
corregimientos_delete2Tip=["",spacer+"This option allows each member of the group to delete any record owned by any member of the group in the 'Corregimientos' table."];
corregimientos_delete3Tip=["",spacer+"This option allows each member of the group to delete any records in the 'Corregimientos' table."];

/*
	Style syntax:
	-------------
	[TitleColor,TextColor,TitleBgColor,TextBgColor,TitleBgImag,TextBgImag,TitleTextAlign,
	TextTextAlign,TitleFontFace,TextFontFace, TipPosition, StickyStyle, TitleFontSize,
	TextFontSize, Width, Height, BorderSize, PadTextArea, CoordinateX , CoordinateY,
	TransitionNumber, TransitionDuration, TransparencyLevel ,ShadowType, ShadowColor]

*/

toolTipStyle=["white","#00008B","#000099","#E6E6FA","","images/helpBg.gif","","","","\"Trebuchet MS\", sans-serif","","","","3",400,"",1,2,10,10,51,1,0,"",""];

applyCssFilter();
