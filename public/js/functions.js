function isRequired(parentElem,action)
{
	if(typeof action == "undefined")
	{
		action = false;
	}
	var hasErrors = 0
	var requiredFields = $(parentElem).find(".isRequired");
	requiredFields.each(function(key,elem){
		if($(elem).val() == "")
		{
			hasErrors++
			$(elem).addClass("errorInput");
			if(action)
			{
				if($(elem).prev("label").length > 0)
					$(elem).next().html($(elem).prev("label").html() + " is required.");
				else
					$(elem).next().html($(elem).attr("name") + " is required.");
			}
			else
				$(elem).next().html($(elem).attr("placeholder") + " is required.");
		}
		else
		{
			$(elem).removeClass("errorInput");
			$(elem).next().html("");
		}
	});
	return hasErrors;
}


function validateZip(parentElem,action)
{
	if(typeof action == "undefined")
	{
		action = false;
	}
	var hasErrors = 0;
	var getFields = $(parentElem).find(".validateZip");
	getFields.each(function(key,elem){
		var val = $(elem).val();
		var test = val.match(/^[0-9]{5,6}$/g);
		if(!test)
		{
			hasErrors++
			$(elem).addClass("errorInput");
			if(action)
				$(elem).next().html($(elem).prev("label").html() + " is invalid.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " is invalid.");
		}
		else
		{
			$(elem).removeClass("errorInput");
			$(elem).next().html("");
		}
	});
	return hasErrors;
}


function validateName(parentElem,action)
{
	if(typeof action == "undefined")
	{
		action = false;
	}
	var hasErrors = 0;
	var getFields = $(parentElem).find(".validateName");
	getFields.each(function(key,elem){
		var val = $(elem).val().trim();

		//console.log("val value -->",val);
		var test = val.match(/^[a-zA-Z ]*$/);
		
		//console.log("test trim value-->", test);
		if(!test)
		{
			hasErrors++
			$(elem).addClass("errorInput");
			if(action)
				$(elem).next().html($(elem).prev("label").html() + " is invalid.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " is invalid.");
		}
		else if(test == "") {
			hasErrors++
			$(elem).addClass("errorInput");
			if(action)
				$(elem).next().html($(elem).prev("label").html() + " is invalid.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " is invalid.");
		}
		else
		{
			$(elem).removeClass("errorInput");
			$(elem).next().html("");
		}
	});
	return hasErrors;
}





function validateEmail(parentElem,action)
{
	if(typeof action == "undefined")
	{
		action = false;
	}
	var getFields = $(parentElem).find(".validateEmail");
	var hasError = 0;
	$.each(getFields,function(e,elem){
		var address = $(elem).val();
		
		if(!address.match(/[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i))
		{
			hasError++;
			$(elem).addClass("errorInput");
			if(action)
				$(elem).next().html($(elem).prev("label").html() + " contains invalid email address.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " contains invalid email address.");
		}
		else
		{
			$(elem).removeClass("errorInput");
			$(elem).next().html("");
		}
	});
	return hasError;
}
function validateMobileNumber(parentElem,action)
{	
	//console.log("called number");
	if(typeof action == "undefined")
	{
		action = false;
	}
	var getFields = $(parentElem).find(".validateMobileNumber");
	var hasError = 0;
	$.each(getFields,function(e,elem){
		var address = $(elem).val();

		//console.log("address-", address);
		// var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var phoneno = /^[0-9]{10}$/ig;
		if(!address.match(phoneno))  
	 	{
	 		//console.log("if consi");
	 		hasError++;
	 		$(elem).addClass("errorInput");
	 		if(action)
				$(elem).next().html($(elem).prev("label").html() + " contains invalid mobile number.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " contains invalid mobile number.");
	 	}
	 	else
	 	{
	 		//console.log("else ")
	 		$(elem).removeClass("errorInput");
			$(elem).next().html("");
	 	}
	});
	return hasError;
}

function validateProductAvailable(productId)
{
	var product = products.findOne({_id: productId});
	var productsAvailable = product.productsAvailable;
	if(productsAvailable == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateCardType(number) 
{
	var re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Master";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "American Express";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return "Visa Electron";

    return "";

}


