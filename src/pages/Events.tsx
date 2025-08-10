import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Trophy, Target, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Competition', 'Workshop', 'Challenge', 'Social', 'Training'];

  const events = [
    {
      id: 1,
      title: 'Summer Fitness Challenge',
      category: 'Challenge',
      date: '2025-06-15',
      time: '9:00 AM',
      location: 'Central Park Fitness Area',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 156,
      maxParticipants: 200,
      price: 'Free',
      difficulty: 'All Levels',
      description: 'Join our annual summer fitness challenge featuring obstacle courses, team competitions, and prizes for all participants.',
      organizer: 'Discipl Community',
      tags: ['Outdoor', 'Team Building', 'Prizes'],
    },
    {
      id: 2,
      title: 'CrossFit Regional Championship',
      category: 'Competition',
      date: '2025-07-20',
      time: '8:00 AM',
      location: 'Metro Sports Complex',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 89,
      maxParticipants: 120,
      price: '$45',
      difficulty: 'Advanced',
      description: 'Regional CrossFit competition with multiple divisions. Test your strength, endurance, and skill against the best athletes.',
      organizer: 'CrossFit Alliance',
      tags: ['Competition', 'CrossFit', 'Prizes'],
    },
    {
      id: 3,
      title: 'Yoga & Meditation Workshop',
      category: 'Workshop',
      date: '2025-05-28',
      time: '10:00 AM',
      location: 'Zen Wellness Studio',
      image: 'https://images.pexels.com/photos/1179748/pexels-photo-1179748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 32,
      maxParticipants: 40,
      price: '$25',
      difficulty: 'Beginner',
      description: 'Learn advanced yoga techniques and meditation practices from certified instructors in a peaceful environment.',
      organizer: 'Mindful Movement',
      tags: ['Yoga', 'Meditation', 'Wellness'],
    },
    {
      id: 4,
      title: 'Community Running Club',
      category: 'Social',
      date: '2025-05-22',
      time: '7:00 AM',
      location: 'Riverside Trail',
      image: 'https://images.pexels.com/photos/1471215/pexels-photo-1471215.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 67,
      maxParticipants: 100,
      price: 'Free',
      difficulty: 'All Levels',
      description: 'Weekly running club meetup for all fitness levels. Make friends while staying active in a supportive environment.',
      organizer: 'City Runners',
      tags: ['Running', 'Social', 'Weekly'],
    },
    {
      id: 5,
      title: 'Strength Training Bootcamp',
      category: 'Training',
      date: '2025-06-05',
      time: '6:00 PM',
      location: 'Elite Fitness Center',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 28,
      maxParticipants: 30,
      price: '$35',
      difficulty: 'Intermediate',
      description: 'Intensive strength training session focusing on proper form, progressive overload, and muscle building techniques.',
      organizer: 'Strength Academy',
      tags: ['Strength', 'Training', 'Small Group'],
    },
    {
      id: 6,
      title: 'Martial Arts Tournament',
      category: 'Competition',
      date: '2025-08-10',
      time: '1:00 PM',
      location: 'Dragon Dojo',
      image: 'https://images.pexels.com/photos/7045650/pexels-photo-7045650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      participants: 45,
      maxParticipants: 60,
      price: '$30',
      difficulty: 'Intermediate',
      description: 'Traditional martial arts tournament with multiple disciplines. Compete in forms, sparring, and weapon categories.',
      organizer: 'Martial Arts Federation',
      tags: ['Martial Arts', 'Tournament', 'Multiple Styles'],
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Competition':
        return <Trophy className="h-4 w-4" />;
      case 'Challenge':
        return <Target className="h-4 w-4" />;
      case 'Training':
        return <Target className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Competitions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join exciting fitness events, competitions, and workshops. 
              Challenge yourself and connect with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-neutral-900">
              Upcoming Events
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors duration-200 md:hidden"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  {category !== 'All' && <span className="mr-2">{getCategoryIcon(category)}</span>}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 text-neutral-800 rounded-full text-xs font-medium">
                      {getCategoryIcon(event.category)}
                      <span className="ml-1">{event.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-neutral-600">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      {event.participants}/{event.maxParticipants} participants
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-neutral-600">
                      by {event.organizer}
                    </span>
                    <span className="text-lg font-semibold text-primary-600">
                      {event.price}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                No events found
              </h3>
              <p className="text-neutral-600">
                Try selecting a different category to see more events.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Organize an Event?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Share your passion with the community by hosting your own fitness event, 
            workshop, or competition on our platform.
          </p>
          <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-50 transition-colors duration-200">
            Create Event
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Events;