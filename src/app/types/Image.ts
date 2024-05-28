export default interface Image {
  src: string;
  width: number;
  height: number;
  public_id?: string;
  metadata?: {
    camera?: string;
    film?: string;
    location?: string;
  };
}
