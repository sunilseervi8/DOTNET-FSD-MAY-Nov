import { Component, ViewEncapsulation } from '@angular/core';
import { Candidate } from '../../../model/candidate';
import { CandidateService } from '../../../service/candidate.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // encapsulation: ViewEncapsulation.ShadowDom,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent {
  candidateList: Array<Candidate> = []
  constructor(private candidateService: CandidateService, private activeRoute: ActivatedRoute, private route: Router) {
  }
  public actId!: string;
  ngOnInit() {
    this.candidateService.getCandidate().subscribe((data) => {
      this.candidateList = data
      console.log(this.candidateList);
    },
      (err) => {
        console.log(err);
      })

  }
  //delete

  deleteCandidate(index: any): void {
    console.log(this.candidateList[index].id);
    this.candidateService.deleteCandidate(this.candidateList[index].id).subscribe((data) => {
      if (data) {
        alert("deleted successfully")
        window.location.reload()  
      }
      
    })
  }


  updateCandidate(): void {
  }

}
