USE [gespro_daw01]
GO
CREATE LOGIN gespro_daw01 WITH PASSWORD = 'flacido'
GO
CREATE USER gespro_daw01 FOR LOGIN gespro_daw01
GO
ALTER ROLE db_owner ADD MEMBER gespro_daw01
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proyecto] (
	[id] [int] IDENTITY(1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_proyectos] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
go


set ansi_nulls on
go
set quoted_identifier on
go
create table [dbo].[rol] (
	[id] [int] identity(1,1) not null,
	[nombre] [varchar](50) not null,
	CONSTRAINT [pk_roles] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[tipo] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_tipo] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[estado] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_estados] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

create table [dbo].[usuarios] (
	[id] [int] identity(1,1) not null,
	[nombre] [varchar](50) not null,
	[apellido] [varchar](50) not null,
	[nivel] [varchar](150) not null,
	[contraseña] [varchar](256) not null,

	CONSTRAINT [pk_usuarios] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[tiene] (
	[id_usuario] [int] not null,
	[id_rol] [int] not null,
	[id_proyecto] [int] not null,

	CONSTRAINT [pk_tiene] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


--__________________________________________________

set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[tarea] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	[descripcion] [varchar] (255),
	[fecha_inicio] date not null,
	[fecha_fin] date null,
	[id_proyecto] [int] not null,
	[id_usuario_creador] [int] not null,
	[id_usuario_asignado] [int] null,
	[id_tipo] [int] not null,
	[id_estado] [int] not null,
	CONSTRAINT [pk_tareas] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO