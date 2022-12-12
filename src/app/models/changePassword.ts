export class ChangePassword {
  public returnSecureToken = true
  
  constructor(
    public password: string,
    public idToken: string
  ){}
}