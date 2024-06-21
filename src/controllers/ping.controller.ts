import { Request, Response, NextFunction } from 'express';
function pingresponse(req: Request, res: Response) {
  res.json(true);
}
export default pingresponse;
