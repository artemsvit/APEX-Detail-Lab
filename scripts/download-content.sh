#!/bin/bash

# Create necessary directories
mkdir -p public/images/{hero,services,projects,process}

# Download hero images
curl -o public/images/hero/hero-1.jpg "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2400"
curl -o public/images/hero/hero-2.jpg "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2400"

# Download project images
curl -o public/images/projects/porsche-911.jpg "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200"
curl -o public/images/projects/mercedes-amg.jpg "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200"
curl -o public/images/projects/bmw-m4.jpg "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200"
curl -o public/images/projects/audi-rs.jpg "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200"
curl -o public/images/projects/tesla-s.jpg "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1200"
curl -o public/images/projects/lambo.jpg "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200"

# Download NEW service images - focused on actual detailing work
curl -o public/images/services/exterior.jpg "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200" # Car washing/detailing
curl -o public/images/services/interior.jpg "https://images.unsplash.com/photo-1600794576273-55de3051777b?q=80&w=1200" # Luxury car interior cleaning
curl -o public/images/services/paint.jpg "https://images.unsplash.com/photo-1575453648632-52d2da7dd6c8?q=80&w=1200" # Paint polishing

# Download process images
curl -o public/images/process/inspection.jpg "https://images.unsplash.com/photo-1635770997770-e2b2c5c0d65e?q=80&w=1200"
curl -o public/images/process/planning.jpg "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200"
curl -o public/images/process/execution.jpg "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
curl -o public/images/process/quality.jpg "https://images.unsplash.com/photo-1596636478939-6c5c0f73e8df?q=80&w=1200"

echo "Content downloaded successfully!"
