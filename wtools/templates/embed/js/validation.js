/* --------------------------
 * Validation
 * --------------------------
*/
function validate() {
	var parent = findParentByClassName(this, "pure-control-group");
	var errorNode = parent.querySelector( ".error" ),
	span = document.createElement( "span" );

	this.classList.remove( "invalid" );
	if ( errorNode ) {
		errorNode.parentNode.removeChild( errorNode );
	}

	if ( !this.validity.valid ) {
		this.classList.add( "invalid" );
		parent.appendChild( span );
		span.classList.add( "error" );
		span.innerHTML = this.validationMessage != "" ? this.validationMessage : "Please match the requested format.";
	}
};

var form = document.querySelector( "form" ),
inputs = form.querySelectorAll( "input" );

for ( var i = 0; i < inputs.length; i++ ) {
	inputs[ i ].addEventListener( "blur", validate );
	inputs[ i ].addEventListener( "invalid", validate );
};

form.addEventListener( "invalid", function( event ) {
	event.preventDefault();
}, true );

/* checkValidity() always returns true in Android Webkit, this check works */
HTMLFormElement.prototype.checkValidityAndroid=function() {
	var inputs = this.querySelectorAll( "input" );
	for ( var i = 0; i < inputs.length; i++ ) {
		if(!inputs[i].validity.valid) {
			return false;
		}
	}
	return true;
};