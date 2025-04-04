"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle, Music, Headphones, Podcast, PauseCircle } from "lucide-react"
import { useState } from "react"

// Mock data - would be replaced with real data in production
const meditationAudios = [
  {
    id: 1,
    title: "Morning Mindfulness",
    description: "Start your day with a calming 10-minute guided meditation",
    duration: "10:00",
    category: "guided",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL, replace with real audio
    coverImage: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Deep Relaxation",
    description: "Release tension and find peace with this relaxation session",
    duration: "15:00",
    category: "guided",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL, replace with real audio
    coverImage: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Stress Relief",
    description: "A quick meditation to help you manage stress and anxiety",
    duration: "8:00",
    category: "guided",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL, replace with real audio
    coverImage: "/placeholder.svg",
  },
]

// Mock podcast episodes
const podcastEpisodes = [
  {
    id: 1,
    title: "Introduction to Mindfulness",
    description: "Learn the basics of mindfulness and how it can transform your life",
    duration: "45:00",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL
    coverImage: "/placeholder.svg",
    date: "Apr 15, 2023",
    episodeNumber: "EP01",
  },
  {
    id: 2,
    title: "Meditation Myths Debunked",
    description: "Dispelling common misconceptions about meditation practice",
    duration: "38:00",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL
    coverImage: "/placeholder.svg",
    date: "May 1, 2023",
    episodeNumber: "EP02",
  },
  {
    id: 3,
    title: "Mindfulness for Better Sleep",
    description: "Techniques to improve your sleep quality through mindfulness",
    duration: "42:00",
    audioUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3", // Sample URL
    coverImage: "/placeholder.svg",
    date: "May 15, 2023",
    episodeNumber: "EP03",
  },
]

// Mock Spotify playlists
const spotifyPlaylists = [
  {
    id: 1,
    title: "Meditation Essentials",
    description: "Essential tracks for your meditation practice",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator",
  },
  {
    id: 2,
    title: "Calm Focus",
    description: "Ambient sounds to help you concentrate and stay present",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3SiCzCxMDOH?utm_source=generator",
  },
  {
    id: 3,
    title: "Sleep & Relaxation",
    description: "Peaceful tracks to help you unwind and prepare for sleep",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYcDQ1hSjOpY?utm_source=generator",
  },
]

const MeditationContent = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [audioElements, setAudioElements] = useState<{ [key: number]: HTMLAudioElement | null }>({})
  const [activeTab, setActiveTab] = useState("guided")

  const handlePlay = (id: number, audioUrl: string) => {
    // Stop any currently playing audio
    if (currentlyPlaying !== null && audioElements[currentlyPlaying]) {
      audioElements[currentlyPlaying]?.pause()
    }

    // If clicking the same track that's already playing, pause it
    if (currentlyPlaying === id) {
      setCurrentlyPlaying(null)
      return
    }

    // Create audio element if it doesn't exist yet
    if (!audioElements[id]) {
      const audio = new Audio(audioUrl)
      setAudioElements((prev) => ({ ...prev, [id]: audio }))
      audio.addEventListener("ended", () => setCurrentlyPlaying(null))
      audio.play()
    } else {
      audioElements[id]?.play()
    }

    setCurrentlyPlaying(id)
  }

  return (
    <>
      <div className="bg-brand-50 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Audio Center</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Explore our collection of guided meditations, podcast episodes, and curated Spotify playlists to enhance
            your mindfulness practice.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="guided" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="guided">
                <Headphones className="mr-2 h-4 w-4" />
                Guided Meditations
              </TabsTrigger>
              <TabsTrigger value="podcast">
                <Podcast className="mr-2 h-4 w-4" />
                Podcast
              </TabsTrigger>
              <TabsTrigger value="spotify">
                <Music className="mr-2 h-4 w-4" />
                Spotify Playlists
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guided" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meditationAudios.map((audio) => (
                  <Card
                    key={audio.id}
                    className="overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 transition-all"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
                      <img
                        src={audio.coverImage || "/placeholder.svg"}
                        alt={audio.title}
                        className="object-cover w-full h-[200px]"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl dark:text-white">{audio.title}</CardTitle>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{audio.duration}</span>
                      </div>
                      <CardDescription className="dark:text-gray-400">{audio.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        onClick={() => handlePlay(audio.id, audio.audioUrl)}
                        className="w-full"
                        variant={currentlyPlaying === audio.id ? "secondary" : "default"}
                      >
                        {currentlyPlaying === audio.id ? (
                          <>
                            <PauseCircle className="mr-2 h-4 w-4" />
                            Pause
                          </>
                        ) : (
                          <>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Play
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="podcast" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {podcastEpisodes.map((podcast) => (
                  <Card
                    key={podcast.id}
                    className="overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 transition-all"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="aspect-square bg-gray-100 dark:bg-gray-700">
                          <img
                            src={podcast.coverImage || "/placeholder.svg"}
                            alt={podcast.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl dark:text-white">{podcast.title}</CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                  {podcast.episodeNumber}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{podcast.date}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{podcast.duration}</span>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="dark:text-gray-400 mt-2">{podcast.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button
                            onClick={() => handlePlay(podcast.id + 100, podcast.audioUrl)}
                            className="w-full"
                            variant={currentlyPlaying === podcast.id + 100 ? "secondary" : "default"}
                          >
                            {currentlyPlaying === podcast.id + 100 ? (
                              <>
                                <PauseCircle className="mr-2 h-4 w-4" />
                                Pause
                              </>
                            ) : (
                              <>
                                <PlayCircle className="mr-2 h-4 w-4" />
                                Play
                              </>
                            )}
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="spotify" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {spotifyPlaylists.map((playlist) => (
                  <Card key={playlist.id} className="overflow-hidden border border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">{playlist.title}</CardTitle>
                      <CardDescription className="dark:text-gray-400">{playlist.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <iframe
                        src={playlist.embedUrl}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={playlist.title}
                        className="rounded-md"
                        style={{ colorScheme: "normal" }}
                      ></iframe>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default MeditationContent

