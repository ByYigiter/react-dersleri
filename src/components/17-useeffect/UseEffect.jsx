import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
//Side effect(Yan etki) olabilecek durumlar
//Api baglantilari
//Dogrudan dom a erisim
//setTimeout veya setInterval; gibi zamanlayici fonksiyonlar
const UseEffect = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	console.log(
		"Bu satir render ve re-render durumlarinda calisir ve alttaki return render EDİLMEDEN once calisir ****"
	);

	// genelde api bağlantıolarında kullanılır ilk defa yukleme yapsın sonra her updating olduğunda yeniden bağlantı yapmasın
	useEffect(() => {
		console.log(
			"Mounting:Bu satir sadece render durumunda calisirxxxx re-renderda calışmaz"
		);
	}, []);

	useEffect(() => {
		console.log(
			"Bu satir render ve re-render durumlarinda ve alttaki return render EDİLDİKTEN sonra calisir calisir+++++ "
		);
		console.log(
			"Bu useeffect ozellikle altaki elementlere useRef ile erismek icin kullanilir"
		);
	});

	useEffect(() => {
		console.log(
			"Burasi message prps unu takip edecek ve bir degisiklik olursa ve ilk render da  calisacak"
		);
	}, [message]);

	// genelde clear işleminde kullanılır temizleme işleminde kullanılır
	useEffect(() => {
		return () => {
			console.log(
				"Burasi unmounting(componenet hafizadan atilmadan hemen once calisir) oldugunda calisacak  calisacak"
			);
		};
	}, []);

	return (
		<div>
			<div>
				{message}-{error}
			</div>
			<Button variant="info" onClick={() => setMessage("Hello")}>
				Set Message
			</Button>
			<Button variant="danger" onClick={() => setError("Some Errors")}>
				Throw Error
			</Button>
		</div>
	);
};

export default UseEffect;
