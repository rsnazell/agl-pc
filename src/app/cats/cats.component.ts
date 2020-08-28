import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { CatsByOwnerGender, Owner } from '../app.types';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
})
export class CatsComponent implements OnInit {
  cats: CatsByOwnerGender;
  error: string;

  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  /** Fetch pet owner data from API, transform and sort as this.cats */
  fetchData(): void {
    this.ownerService.getOwners().subscribe(
      (owners) => {
        this.cats = this.getCatsByOwnerGender(owners);
        this.sortCatsByName(this.cats);
      },
      (error) => (this.error = 'API error')
    );
  }

  /** Returns an array of cats, by owner gender. */
  getCatsByOwnerGender(owners: Owner[]): CatsByOwnerGender {
    const cats: CatsByOwnerGender = { male: [], female: [] };
    owners.forEach((owner) => {
      owner.pets instanceof Array &&
        owner.pets.forEach((pet) => {
          if (pet.type === 'Cat') {
            cats[owner.gender.toLowerCase()].push(pet);
          }
        });
    });
    cats.male.sort((a, b) => a.name.localeCompare(b.name));
    return cats;
  }

  /** Sorts cats alphabetically by name. */
  sortCatsByName(cats: CatsByOwnerGender): void {
    cats.male.sort((a, b) => a.name.localeCompare(b.name));
    cats.female.sort((a, b) => a.name.localeCompare(b.name));
  }
}
