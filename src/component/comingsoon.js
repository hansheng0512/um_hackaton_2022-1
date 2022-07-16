import React from "react";
  
const comingsoon = () => {
  return (
    <div>
	<head>
		<meta charset="utf-8" />
		<title>Coming Soon to a Browser Near You</title>		
		<link rel="stylesheet" type="text/css" href="style.css" />
		
	</head>
	<body>
		<div class="wrapper">
			<img src="images/logo.png" alt="YourLogo" title="YourLogo"/>
			<div class="hr"></div>
			<h1>Coming Soon to a Browser Near You</h1>
			<p>Unfortunately, we’re not quite ready yet. <strong> But, you can see our progress below:</strong></p>
						
			<section class="progress">
				<div class="progress-bar-container" id="tipsy" title="87% Complete"> 
					<article class="progress-bar" style="width:87%"  ></article> 
				</div>
				<article class="txt-launch-day-hat"></article>
			</section>
			
			<div class="hr"></div>
			<section class="mailing-list">
				<h2>Want to be the first to know when we're ready?</h2>
				
			</section><div class="clear"></div>
			<div class="hr"></div>
			
			<p class="credit">Template by <a href="http://www.medialoot.com">MediaLoot</a></p>
		</div>
	</body>

    </div>
  );
};
  
export default comingsoon;