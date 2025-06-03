import { z } from "zod";

export const matchModalitySchema = z.enum([
  "Beach Tennis",
  "Basquete",
  "Ciclismo",
  "Corrida",
  "Futsal",
  "Futebol Society",
  "Futevôlei",
  "Natação",
  "Tênis",
  "Vôlei",
]);

export const matchLevelSchema = z.enum([
  "Beginner",
  "Intermediary",
  "Advanced",
  "Mixed",
]);

export const matchParticipantSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  avatarUrl: z.string().url("Invalid avatar URL"),
});

export const matchSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  date: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, "Invalid date format"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required").optional(),
  modality: matchModalitySchema,
  distance: z.number().min(0, "Distance must be positive"),
  joined: z.boolean(),
  players: z.number().min(1, "Must have at least 1 player"),
  participants: z.array(matchParticipantSchema),
  level: matchLevelSchema.nullable().optional(),
  isPrivate: z.boolean().nullable().optional(),
});

export const createMatchSchema = matchSchema
  .omit({
    id: true,
    joined: true,
    players: true,
    participants: true,
    distance: true,
  })
  .extend({
    minPlayers: z
      .number()
      .min(1, "Must have at least 1 min players")
      .max(100, "Maximum 100 players allowed"),
    maxPlayers: z
      .number()
      .min(2, "Must have at least 2 max player")
      .max(100, "Maximum 100 players allowed")
      .refine((val) => val >= 2, "Max players must be greater than 1"),
    latitude: z.number(),
    longitude: z.number(),
    level: matchLevelSchema.nullable().optional(),
    isPrivate: z.boolean().nullable().optional(),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required").optional(),
  });

export type CreateMatchInput = z.infer<typeof createMatchSchema>;
