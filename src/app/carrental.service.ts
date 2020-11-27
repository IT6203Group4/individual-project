import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarrentalService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getCarrentals() {
        return this.http.get('http://localhost:8000/carrentals');
    }

    // Uses http.post() to post data 
    addCarrentals(ft_Nm: string, lt_Nm: string, em_Id: string, mbl_Num: string, lisn_Num: string,
        p_d_Loc: string, pickup_Dt: string, pickup_Tym: string, dropoff_Dt: string, dropoff_Tym: string, find_my_Car: string) {
        this.http.post('http://localhost:8000/carrentals', {
            "Ft_Nm": ft_Nm, "Lt_Nm": lt_Nm, "Em_ID": em_Id, "Mbl_Num": mbl_Num, "Lisn_Num": lisn_Num,
            "p_d_loc": p_d_Loc, "pickup_dt": pickup_Dt, "pickup_tym": pickup_Tym, "dropoff_dt": dropoff_Dt, "dropoff_tym": dropoff_Tym, "find_my_car": find_my_Car
        })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        // location.reload();
    }
    deleteCarrental(carrentalId: string) {
        this.http.delete("http://localhost:8000/carrentals/" + carrentalId)
            .subscribe(() => {
                console.log('Deleted: ' + carrentalId);
            });
        location.reload();
    }

    updateCarrental(carrentalId: string, ft_Nm: string, lt_Nm: string, em_Id: string, mbl_Num: string, lisn_Num: string, p_d_Loc: string,
        pickup_Dt: string, pickup_Tym: string, dropoff_Dt: string, dropoff_Tym: string, find_my_Car: string) {
        //request path http://localhost:8000/carrentals/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/carrentals/"
            + carrentalId, { "Ft_Nm": ft_Nm, "Lt_Nm": lt_Nm, "Em_ID": em_Id, "Mbl_Num": mbl_Num, "Lisn_Num": lisn_Num, "p_d_loc": p_d_Loc, "pickup_dt": pickup_Dt, "pickup_tym": pickup_Tym, "dropoff_dt": dropoff_Dt, "dropoff_tym": dropoff_Tym, "find_my_car": find_my_Car })
            .subscribe(() => {
                console.log('Updated: ' + carrentalId);
            });
        // location.reload();  
    }

}



