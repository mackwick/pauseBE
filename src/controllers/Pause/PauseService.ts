//DEPENDENCIES
import { db } from "../../utils/connection";

//PAUSE TYPE -- what I want returned
type Pause = {
  id: number;
  date: Date;
  length: number;
  before: string;
  after: string;
  thoughts: string | null;
  user: string;
};

//LIST ALL PAUSES
export const listPauses = async (): Promise<Pause[]> => {
  return db.pause.findMany({
    select: {
      id: true,
      date: true,
      length: true,
      before: true,
      after: true,
      thoughts: true,
      user: true,
    },
  });
};

//GRAB ONE PAUSE
export const showPause = async (id: number): Promise<Pause | null> => {
  return db.pause.findUnique({
    where: {
      id,
    },
  });
};

//CREATE A PAUSE
export const makePause = async (
  pause: Omit<Pause, "id" & "date">
): Promise<Pause> => {
  const { length, before, after, thoughts, user } = pause;
  return db.pause.create({
    data: {
      length,
      before,
      after,
      thoughts,
      user,
    },
    select: {
      id: true,
      date: true,
      length: true,
      before: true,
      after: true,
      thoughts: true,
      user: true,
    },
  });
};

//UPDATE A PAUSE
export const updatePause = async (
  pause: Omit<Pause, "id" & "date">,
  id: number
): Promise<Pause> => {
  const { length, before, after, thoughts, user } = pause;
  return db.pause.update({
    where: {
      id,
    },
    data: {
      id,
      before,
      after,
      length,
      thoughts,
      user,
    },
    select: {
      id: true,
      date: true,
      before: true,
      after: true,
      length: true,
      thoughts: true,
      user: true,
    },
  });
};

//DELETE A PAUSE
export const deletePause = async (id: number): Promise<void> => {
  await db.pause.delete({
    where: {
      id,
    },
  });
};
