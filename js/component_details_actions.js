root = window.getComputedStyle(document.querySelector(':root'));
time_1 = root.getPropertyValue('--time-1');
time_1 = time_1.substring(0, time_1.length - 1) * 1000;

function detailsToggle(detailsBtn) {

    let componentBox = detailsBtn.parentNode,
    componentDetails = componentBox.querySelector('.components__details'),
	component = componentBox.querySelector('.components__item'),
	componentName = componentBox.querySelector('.components__name_details');
	
	if (detailsBtn.classList.toggle('details-active')) {
		
		component.classList.toggle('invisible');
		componentName.classList.toggle('invisible');
		
		setTimeout(() => {
			componentName.classList.toggle('deactive');
			component.classList.toggle('deactive');
			componentDetails.classList.toggle('deactive');
	
			setTimeout(() => {
				componentDetails.classList.toggle('invisible');
			}, 20);
	
		}, time_1 + 20);
		
	} else {
		
		componentDetails.classList.toggle('invisible');
		
		setTimeout(() => {
			
			componentDetails.classList.toggle('deactive');
			component.classList.toggle('invisible');
			component.classList.toggle('deactive');
			componentName.classList.toggle('deactive');
			
			setTimeout(() => {
				componentName.classList.toggle('invisible');
			}, 20);	
			
		}, time_1 + 20);
	
	}
	
	checkDetailsActivity();
}

function checkDetailsActivity() {

    let prodImage = document.querySelector('.prod-image'),
        componentDetailsBtns = document.getElementsByClassName('components__btn');

    for (const componentDetailsBtn of componentDetailsBtns) {

        if (componentDetailsBtn.classList.contains('details-active')) {
            prodImage.classList.add('darkened');
            return;
        }
    }

    prodImage.classList.remove('darkened');
}