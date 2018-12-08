import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor (
    private serversService: ServersService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.activeRoute
      .params
      .subscribe((params: Params) => this.server = this.serversService.getServer(+params['id']));
  }

  onLoad() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute, queryParamsHandling: 'preserve' });
  }

}
