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
				$(elem).next().html($(elem).prev("label").html() + " is required.");
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
		var test = val.match(/^[0-9]{6,8}$/g);
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
	if(typeof action == "undefined")
	{
		action = false;
	}
	var getFields = $(parentElem).find(".validateMobileNumber");
	var hasError = 0;
	$.each(getFields,function(e,elem){
		var address = $(elem).val();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
		if(!address.match(phoneno))  
	 	{
	 		hasError++;
	 		$(elem).addClass("errorInput");
	 		if(action)
				$(elem).next().html($(elem).prev("label").html() + " contains invalid mobile number.");
			else
				$(elem).next().html($(elem).attr("placeholder") + " contains invalid mobile number.");
	 	}
	 	else
	 	{
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
