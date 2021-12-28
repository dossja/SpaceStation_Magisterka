#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["/ASP.NET/ASPNET.csproj", "/ASP.NET/"]
COPY ["/ORM/ORM.csproj", "/ORM/"]
RUN dotnet restore "/ASP.NET/ASPNET.csproj"
COPY . .
WORKDIR "/src/ASP.NET"
RUN dotnet build "ASPNET.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ASPNET.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
WORKDIR /app/ASP.NET
ENTRYPOINT [ "ls", "." ]
ENTRYPOINT ["dotnet", "ASPNET.dll"]