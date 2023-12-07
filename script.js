document.getElementById("mybutton").addEventListener
("click", kiad);

document.getElementById("myform").addEventListener
("submit",function(e) {
			let usernev = document.getElementById('nev').value;
			if (usernev == '') {
				alert('Kérjük, adja meg a nevét!');
				e.preventDefault();
			}
	
}
);

		function kiad() {
			let darabszam = 0;
			let tuninga = 0;

			if (document.getElementById('Németország').checked) {
				darabszam = 50;
			}
			if (document.getElementById('Olaszország').checked) {
				darabszam = 10;
			}
			if (document.getElementById('Japán').checked) {
				darabszam = 30;
			}
			if (document.getElementById('USA').checked) {
				darabszam = 20;
			}

			if (document.getElementById('Liberty Walk').checked) {
				tuninga = 0.5;
			}
			if (document.getElementById('Toyo Tires').checked) {
				tuninga = 0.5;
			}

			document.getElementById('keke').value = darabszam * tuninga;
		}


		function bekuldes()
		{let pont = 0;
		
			const a = document.getElementById("1910").checked;
			const b = document.getElementById("1916").checked;
			const c = document.getElementById("1946").checked;
		
			if (b== true) { document.getElementById("true1").style.color = "lightgreen"; };
		
			if (a== true) { document.getElementById("false1").style.color = "red"; };
			if (c== true) { document.getElementById("false2").style.color = "red"; };
		
			if (b==1){pont=pont+1;}
		
			const d = document.getElementById("Huracán").checked;
			const e = document.getElementById("Berlinetta").checked;
			const f = document.getElementById("Sesto Elemento").checked;
		
			if (e== true) { document.getElementById("true2").style.color = "lightgreen"; };
		
			if (d== true) { document.getElementById("false3").style.color = "red"; };
			if (f== true) { document.getElementById("false4").style.color = "red"; };
		
			if (e==1){pont=pont+1;}
		
			const g = document.getElementById("Nissan 350z").checked;
			const h = document.getElementById("Toyota Supra").checked;
			const i = document.getElementById("BMW440").checked;
		
			if (h== true) { document.getElementById("true3").style.color = "lightgreen"; };
		
			if (g== true) { document.getElementById("false5").style.color = "red"; };
			if (i== true) { document.getElementById("false6").style.color = "red"; };
		
			if (h==1){pont=pont+1;}
		
			const j = document.getElementById("Rocket Bunny").checked;
			const k = document.getElementById("Liberty Walk").checked;
			const l = document.getElementById("Scat Pack").checked;
		
			if (k== true) { document.getElementById("true4").style.color = "lightgreen"; };
		
			if (j== true) { document.getElementById("false7").style.color = "red"; };
			if (l== true) { document.getElementById("false8").style.color = "red"; };
		
			if (k==1){pont=pont+1;}
		
			const m = document.getElementById("R33").checked;
			const n = document.getElementById("R34").checked;
			const o = document.getElementById("R35").checked;

			if (n== true) { document.getElementById("true5").style.color = "lightgreen"; };
		
			if (m== true) { document.getElementById("false9").style.color = "red"; };
			if (o== true) { document.getElementById("false10").style.color = "red"; };
		
			if (n==1){pont=pont+1;}
			
		
			
		
			if (pont == 5) {
				document.getElementById("pontszam").innerText = "Összesen " + String(pont);
		   
			} else if (pont == 4|| pont == 3) {
				document.getElementById("pontszam").innerText = "Összesen " + String(pont);
		   
			} else {
				document.getElementById("pontszam").innerText = "Összesen " + String(pont) }
		}







