#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000
# ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["app.csproj", "."]
RUN dotnet restore "./app.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "app.csproj" -c Release -o /app/build


FROM build AS publish
RUN dotnet publish "app.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
# ENTRYPOINT [ "ls", "." ]
# ENTRYPOINT ["dotnet", "--version"]
ENTRYPOINT ["dotnet", "app.dll"]