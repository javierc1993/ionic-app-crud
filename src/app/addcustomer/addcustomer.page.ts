import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  name_customer: string = "";
  desc_customer: string = "";
  id: number;
  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.name_customer = data.name;
  		this.desc_customer = data.desc;
  		console.log(data);
  	});
  }

  createdProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'add',
  			name_customer : this.name_customer,
  			desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/customer']);
  			console.log('OK');
  		});
  	});

  }

  updateProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			customer_id : this.id,
  			name_customer : this.name_customer,
  			desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/customer']);
  			console.log('OK');
  		});
  	});

  }

}
