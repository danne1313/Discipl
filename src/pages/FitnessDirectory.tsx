import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Phone, Globe, Filter } from 'lucide-react';

const FitnessDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Gym', 'Yoga Studio', 'CrossFit', 'Swimming', 'Martial Arts', 'Dance Studio'];

  const fitnessStarters = [
    {
      id: 1,
      name: 'Elite Fitness Center',
      category: 'Gym',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 124,
      location: '123 Main St, Downtown',
      hours: '5:00 AM - 11:00 PM',
      phone: '(555) 123-4567',
      website: 'www.elitefitness.com',
      amenities: ['Personal Training', 'Group Classes', 'Swimming Pool', 'Sauna'],
      description: 'State-of-the-art fitness facility with modern equipment and expert trainers.',
    },
    {
      id: 2,
      name: 'Zen Yoga Studio',
      category: 'Yoga Studio',
      image: 'https://images.pexels.com/photos/1179748/pexels-photo-1179748.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 89,
      location: '456 Peace Ave, Wellness District',
      hours: '6:00 AM - 10:00 PM',
      phone: '(555) 234-5678',
      website: 'www.zenyoga.com',
      amenities: ['Hot Yoga', 'Meditation', 'Workshops', 'Retail Store'],
      description: 'Peaceful yoga sanctuary offering various styles from beginner to advanced.',
    },
    {
      id: 3,
      name: 'CrossFit Thunder',
      category: 'CrossFit',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 156,
      location: '789 Power St, Athletic Quarter',
      hours: '5:00 AM - 10:00 PM',
      phone: '(555) 345-6789',
      website: 'www.crossfitthunder.com',
      amenities: ['Olympic Lifting', 'WODs', 'Nutrition Coaching', 'Competition Team'],
      description: 'Intense CrossFit training with experienced coaches and supportive community.',
    },
    {
      id: 4,
      name: 'Aqua Fitness Center',
      category: 'Swimming',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 92,
      location: '321 Water Way, Riverside',
      hours: '6:00 AM - 10:00 PM',
      phone: '(555) 456-7890',
      website: 'www.aquafitness.com',
      amenities: ['Olympic Pool', 'Water Aerobics', 'Swimming Lessons', 'Hot Tub'],
      description: 'Premier aquatic fitness facility with certified swim instructors.',
    },
    {
      id: 5,
      name: 'Dragon Martial Arts',
      category: 'Martial Arts',
      image: 'https://images.pexels.com/photos/7045650/pexels-photo-7045650.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 73,
      location: '654 Honor Blvd, Traditional Quarter',
      hours: '3:00 PM - 10:00 PM',
      phone: '(555) 567-8901',
      website: 'www.dragonmartialarts.com',
      amenities: ['Karate', 'Taekwondo', 'Self Defense', 'Kids Classes'],
      description: 'Traditional martial arts training with focus on discipline and character.',
    },
    {
      id: 6,
      name: 'Rhythm Dance Studio',
      category: 'Dance Studio',
      image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 108,
      location: '987 Groove St, Arts District',
      hours: '4:00 PM - 11:00 PM',
      phone: '(555) 678-9012',
      website: 'www.rhythmdance.com',
      amenities: ['Hip Hop', 'Ballet', 'Salsa', 'Wedding Dance'],
      description: 'Creative dance studio offering classes for all ages and skill levels.',
    },
  ];

  const filteredCenters = fitnessStarters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         center.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || center.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fitness Directory</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the best fitness centers, gyms, and studios in your area. 
              Find your perfect workout environment today.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              {filteredCenters.length} Results Found
            </h2>
            <p className="text-neutral-600">
              {selectedCategory !== 'All' && `Filtered by: ${selectedCategory}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCenters.map((center) => (
              <div
                key={center.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {center.name}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {center.category}
                    </span>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(center.rating)
                              ? 'text-accent-500 fill-current'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-neutral-600">
                      {center.rating} ({center.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {center.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      {center.location}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      {center.hours}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      {center.phone}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {center.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                    {center.amenities.length > 3 && (
                      <span className="text-xs text-neutral-500">
                        +{center.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                      Contact
                    </button>
                    <a
                      href={`https://${center.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                No results found
              </h3>
              <p className="text-neutral-600">
                Try adjusting your search terms or filters to find more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FitnessDirectory;