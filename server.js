const express = require('express');
const app = express();

var j = {
	         "licenses": [
			                 { "id": "0", "value": "Val 0" },
			                 { "id": "1", "value": "Val 1" },
			                 { "id": "2", "value": "Val 2" },
			                 { "id": "3", "value": "Val 3" },
			                 { "id": "4", "value": "Val 4" },
			                 { "id": "5", "value": "Val 5" },
			                 { "id": "6", "value": "Val 6" },
			                 { "id": "7", "value": "Val 7" },
			                 { "id": "8", "value": "Val 8" },
			                 { "id": "9", "value": "Val 9" },
			                 { "id": "10", "value": "Val 10" },
			                 { "id": "11", "value": "Val 11" },
			                 { "id": "12", "value": "Val 12" },
			                 { "id": "13", "value": "Val 13" },
			                 { "id": "14", "value": "Val 14" },
			                 { "id": "15", "value": "Val 15" },
			                 { "id": "16", "value": "Val 16" },
			                 { "id": "17", "value": "Val 17" },
			                 { "id": "18", "value": "Val 18" },
			                 { "id": "19", "value": "Val 19" },
			                 { "id": "20", "value": "Val 20" },
			                 { "id": "21", "value": "Val 21" },
			                 { "id": "22", "value": "Val 22" },
			                 { "id": "23", "value": "Val 23" },
			                 { "id": "24", "value": "Val 24" },
			                 { "id": "25", "value": "Val 25" },
			                 { "id": "26", "value": "Val 26" },
			                 { "id": "27", "value": "Val 27" },
			                 { "id": "28", "value": "Val 28" },
			                 { "id": "29", "value": "Val 29" }
			          ]
};

app.get('/', (req,res) => {
	res.send(j);
})
app.listen(3000, () => console.log('Server running on port 3000'));
