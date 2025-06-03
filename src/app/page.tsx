"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { MatchFilters } from "@/components/matches/MatchFilters";
import { MatchMap } from "@/components/matches/MatchMap";
import { MatchList } from "@/components/matches/MatchList";
import { CreateMatchModal } from "@/components/matches/CreateMatchModal";
import { CreateMatchButton } from "@/components/matches/CreateMatchButton";
import { MatchModality } from "@/types/match";
import { CreateChallengeFormData } from "@/schemas/challenge";
import { LocationPermissionDialog } from "@/components/LocationPermissionDialog";
import { useMatches } from "@/hooks/useMatches";
import { useLocation } from "@/hooks/useLocation";

interface Filters {
  date?: string;
  modality: MatchModality | "all";
  distance?: number;
}

export default function HomePage() {
  const { user } = useUser();
  const currentUserId = user?.id ?? "";
  const [filters, setFilters] = useState<Filters>({ modality: "all" });
  const [createOpen, setCreateOpen] = useState(false);

  const {
    userLocation,
    locationModalOpen,
    setLocationModalOpen,
    handleRequestLocation,
  } = useLocation();

  const {
    matches,
    loading,
    handleJoin,
    handleLeave,
    handleCreate,
    handleDelete,
    filterMatches,
  } = useMatches(userLocation);

  const handleCreateChallenge = async (data: CreateChallengeFormData) => {
    try {
      // TODO: Implement API call to create challenge
      console.log("Creating challenge:", data);
    } catch (error) {
      console.error("Failed to create challenge:", error);
    }
  };

  const filteredMatches = filterMatches(filters);

  return (
    <>
      <LocationPermissionDialog
        open={locationModalOpen}
        onOpenChange={setLocationModalOpen}
        onRequestLocation={handleRequestLocation}
      />
      <div className="h-screen flex flex-col">
        <main className="flex-1 w-full mx-auto px-3 py-6 md:overflow-hidden overflow-y-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-letsplay-red">
              Find a Match
            </h1>
            <CreateMatchButton onClick={() => setCreateOpen(true)} />
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-4/5 flex flex-col gap-6">
              <MatchMap
                matches={filteredMatches}
                onSelect={() => {}}
                userLocation={userLocation ?? undefined}
              />
            </div>
            <div className="lg:w-3/5">
              <MatchFilters onChange={setFilters} />
              {loading ? (
                <div className="text-center py-8 text-gray-500">
                  Loading matches...
                </div>
              ) : (
                <MatchList
                  matches={filteredMatches}
                  onJoin={handleJoin}
                  onLeave={handleLeave}
                  onCreateChallenge={handleCreateChallenge}
                  currentUserId={currentUserId}
                  onDelete={handleDelete}
                />
              )}
            </div>
          </div>
          <CreateMatchModal
            open={createOpen}
            onOpenChange={setCreateOpen}
            onCreate={handleCreate}
          />
        </main>
      </div>
    </>
  );
}
