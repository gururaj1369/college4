
var stringMatch =/^[a-z A-Z]+$/;
var numberMatch =/^[0-9]+$/;
var mailMatch =/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/; 
var pwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function checklogin()
{
	var user_id=document.getElementById("userId");
	var user_pwd=document.getElementById("userPwd");
	if(user_id.value=="")
	{
		$.toast({
		heading: 'Alert',
		text: 'Please Enter User Id',
		position: 'top-right',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 4000, 
		stack: 6
	  });
	  user_id.focus();
		return false;	
	}
	if(user_pwd.value=="")
	{
		$.toast({
		heading: 'Alert',
		text: 'Please Enter Password',
		position: 'top-right',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 4000, 
		stack: 6
	  });
	  user_pwd.focus();
		return false;	
	}
}


function validateMba()
{
	var field="MBA";    
	var mba_stdname=document.getElementById("stdName_mba");
	var mba_stdemail=document.getElementById("stdEmail_mba");
	var mba_stdcontact=document.getElementById("stdContact_mba");
	var mba_stdenqmsg=document.getElementById("stdMessage_mba");
	
	if(mba_stdname.value=="")
	{
		$.toast({
		heading: 'Alert',
		text: 'Please Your Name',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 4000, 
		stack: 6
	  });
	  mba_stdname.focus();
		return false;		
	}
	 
	if(mba_stdemail.value=="")
	{ 
		$.toast({
		heading: 'Alert',
		text: 'Please Email Address',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 3000, 
		stack: 6
		});
		mba_stdemail.focus();
		return false;	 	
	}
	else{
		if(mba_stdemail.value.match(mailMatch))
		{	
			mba_stdemail.style.borderColor="";
		}
		else
		{	
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Valid Email Id',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  mba_stdemail.focus();
		  return false;
			 
		}
	}
	if(mba_stdcontact.value=="")
	{
		$.toast({
            heading: 'Alert',
            text: 'Please Enter Contact No',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  mba_stdcontact.focus();
		  return false;
	}
	else
		{
			
			
		if(mba_stdcontact.value.length < 10  )
		{ 
		
			$.toast({
            heading: 'Alert',
            text: 'Please Enter 10 Digit Contact',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  mba_stdcontact.focus();
			return false;
		}
		else
		{
			mba_stdcontact.style.borderColor="";
			if(mba_stdcontact.value.match(numberMatch))
			{	
				mba_stdcontact.style.borderColor="";
			}
			else
			{	
				$.toast({
					heading: 'Alert',
					text: 'Please Enter Only Numbers',
					position: 'top-right',
					loaderBg:'#FF7C00',
					icon: 'warning',
					hideAfter: 3000, 
					stack: 6
						 });
				 
					mba_stdcontact.focus();
				return false;
			}
		}
	}
	if(mba_stdenqmsg.value=="")
		{
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Enquiry Message',
            position: 'mid-center',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  mba_stdenqmsg.focus();
		  return false;	
		}
		 
		$.ajax({
			
			type:"POST",
			data:"mba_stdname="+mba_stdname.value+"&mba_stdemail="+mba_stdemail.value+"&mba_stdcontact="+mba_stdcontact.value+"&mba_stdenqmsg="+mba_stdenqmsg.value,
			url:"ajax/sendmbaenquiry.php",
			success: function(sendmbaenq)
						{ 
							if(sendmbaenq==1)
							{ 
								  swal("Success", "Your Enquiry Succcessfully Sent To Our Official staff. We will get back you soon... Thank you. ", "success");

							}							
							if(sendmbaenq==2)
							{ 
								  swal("Error!!!", "Please Try Again ", "error");
							}							
						}
			
		});
		 
}
function validateBba() 
{
	var field="MBA";    
	var bba_stdname=document.getElementById("stdName_bba");
	var bba_stdemail=document.getElementById("stdEmail_bba");
	var bba_stdcontact=document.getElementById("stdContact_bba");
	var bba_stdenqmsg=document.getElementById("stdMessage_bba");
	
	if(bba_stdname.value=="")
	{
		$.toast({
		heading: 'Alert',
		text: 'Please Your Name',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 4000, 
		stack: 6
	  });
	  bba_stdname.focus();
		return false;		
	}
	 
	if(bba_stdemail.value=="")
	{ 
		$.toast({
		heading: 'Alert',
		text: 'Please Email Address',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 3000, 
		stack: 6
		});
		bba_stdemail.focus();
		return false;	 	
	}
	else{
		if(bba_stdemail.value.match(mailMatch))
		{	
			bba_stdemail.style.borderColor="";
		}
		else
		{	
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Valid Email Id',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bba_stdemail.focus();
		  return false;
			 
		}
	}
	if(bba_stdcontact.value=="")
	{
		$.toast({
            heading: 'Alert',
            text: 'Please Enter Contact No',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bba_stdcontact.focus();
		  return false;
	}
	else
		{
			
			
		if(bba_stdcontact.value.length < 10  )
		{ 
		
			$.toast({
            heading: 'Alert',
            text: 'Please Enter 10 Digit Contact',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bba_stdcontact.focus();
			return false;
		}
		else
		{
			bba_stdcontact.style.borderColor="";
			if(bba_stdcontact.value.match(numberMatch))
			{	
				bba_stdcontact.style.borderColor="";
			}
			else
			{	
				$.toast({
					heading: 'Alert',
					text: 'Please Enter Only Numbers',
					position: 'top-right',
					loaderBg:'#FF7C00',
					icon: 'warning',
					hideAfter: 3000, 
					stack: 6
						 });
				 
					bba_stdcontact.focus();
				return false;
			}
		}
	}
	if(bba_stdenqmsg.value=="")
		{
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Enquiry Message',
            position: 'mid-center',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bba_stdenqmsg.focus();
		  return false;	
		}
		 
		$.ajax({
			
			type:"POST",
			data:"mba_stdname="+bba_stdname.value+"&mba_stdemail="+bba_stdemail.value+"&mba_stdcontact="+bba_stdcontact.value+"&mba_stdenqmsg="+bba_stdenqmsg.value,
			url:"ajax/sendbbaenquiry.php",
			success: function(sendmbaenq)
						{ 
							if(sendmbaenq==1)
							{ 
								  swal("Success", "Your Enquiry Succcessfully Sent To Our Official staff. We will get back you soon... Thank you. ", "success"); 
							}							
							if(sendmbaenq==2)
							{ 
								  swal("Error!!!", "Please Try Again ", "error");
							}							
						} 
		});
		 
}
function validateBcom() 
{
	var field="MBA";    
	var bcm_stdname=document.getElementById("stdName_bcm");
	var bcm_stdemail=document.getElementById("stdEmail_bcm");
	var bcm_stdcontact=document.getElementById("stdContact_bcm");
	var bcm_stdenqmsg=document.getElementById("stdMessage_bcm");
	
	if(bcm_stdname.value=="")
	{
		$.toast({
		heading: 'Alert',
		text: 'Please Your Name',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 4000, 
		stack: 6
	  });
	  bcm_stdname.focus();
		return false;		
	}
	 
	if(bcm_stdemail.value=="")
	{ 
		$.toast({
		heading: 'Alert',
		text: 'Please Email Address',
		position: 'mid-center',
		loaderBg:'#FF7C00',
		icon: 'warning',
		hideAfter: 3000, 
		stack: 6
		});
		bcm_stdemail.focus();
		return false;	 	
	}
	else{
		if(bcm_stdemail.value.match(mailMatch))
		{	
			bcm_stdemail.style.borderColor="";
		}
		else
		{	
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Valid Email Id',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bcm_stdemail.focus();
		  return false;
			 
		}
	}
	if(bcm_stdcontact.value=="")
	{
		$.toast({
            heading: 'Alert',
            text: 'Please Enter Contact No',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bcm_stdcontact.focus();
		  return false;
	}
	else
		{
			
			
		if(bcm_stdcontact.value.length < 10  )
		{ 
		
			$.toast({
            heading: 'Alert',
            text: 'Please Enter 10 Digit Contact',
            position: 'top-right',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bcm_stdcontact.focus();
			return false;
		}
		else
		{
			bcm_stdcontact.style.borderColor="";
			if(bcm_stdcontact.value.match(numberMatch))
			{	
				bcm_stdcontact.style.borderColor="";
			}
			else
			{	
				$.toast({
					heading: 'Alert',
					text: 'Please Enter Only Numbers',
					position: 'top-right',
					loaderBg:'#FF7C00',
					icon: 'warning',
					hideAfter: 3000, 
					stack: 6
						 });
				 
					bcm_stdcontact.focus();
				return false;
			}
		}
	}
	if(bcm_stdenqmsg.value=="")
		{
			$.toast({
            heading: 'Alert',
            text: 'Please Enter Enquiry Message',
            position: 'mid-center',
            loaderBg:'#FF7C00',
            icon: 'warning',
            hideAfter: 3000, 
            stack: 6
          });
		  bcm_stdenqmsg.focus();
		  return false;	
		}
		 
		$.ajax({
			
			type:"POST",
			data:"mba_stdname="+cm_stdname.value+"&mba_stdemail="+cm_stdemail.value+"&mba_stdcontact="+cm_stdcontact.value+"&mba_stdenqmsg="+cm_stdenqmsg.value,
			url:"ajax/sendbcmenquiry.php",
			success: function(sendmbaenq)
						{ 
							if(sendmbaenq==1)
							{ 
								  swal("Success", "Your Enquiry Succcessfully Sent To Our Official staff. We will get back you soon... Thank you. ", "success"); 
							}							
							if(sendmbaenq==2)
							{ 
								  swal("Error!!!", "Please Try Again ", "error");
							}							
						} 
		});
		 
}
