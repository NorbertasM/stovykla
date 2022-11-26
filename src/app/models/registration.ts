export class Registration {
  public id: string | null = null

  constructor(
    public name: string,
    public lastName: string,
    public phoneNr: string,
    public birthYear: number,
    public childGender: string,
    public email: string,
    public childClass: number,
  ) {}
}