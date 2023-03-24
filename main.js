//using map 2
		
		  const user=[
				{ f_n:"Alex",
				  l_n:"Raja"},
				{ f_n:"Thanga",
				  l_n:"Raja"},
				{ f_n:"Ram",
			      l_n:"Kumar"},
				];
		 
			var a=user.map(function (lname){
				return lname.l_n;
			});
			console.log(a);