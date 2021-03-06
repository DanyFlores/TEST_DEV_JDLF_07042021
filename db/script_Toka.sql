USE [toka_crud]
GO
/****** Object:  Table [dbo].[Tb_PersonasFisicas]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tb_PersonasFisicas](
	[IdPersonaFisica] [int] IDENTITY(1,1) NOT NULL,
	[FechaRegistro] [datetime] NULL,
	[FechaActualizacion] [datetime] NULL,
	[Nombre] [varchar](50) NULL,
	[ApellidoPaterno] [varchar](50) NULL,
	[ApellidoMaterno] [varchar](50) NULL,
	[RFC] [varchar](13) NULL,
	[FechaNacimiento] [date] NULL,
	[UsuarioAgrega] [int] NULL,
	[Activo] [bit] NULL,
 CONSTRAINT [PK_Tb_PersonasFisicas] PRIMARY KEY CLUSTERED 
(
	[IdPersonaFisica] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblCuentaUsuario]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblCuentaUsuario](
	[IdCuentaUsuario] [uniqueidentifier] NOT NULL,
	[Nombres] [nvarchar](100) NULL,
	[Apellidos] [nvarchar](100) NULL,
	[Correo] [nvarchar](100) NULL,
	[Password] [nvarchar](30) NULL,
	[IdRol] [int] NULL,
	[Rol] [nvarchar](100) NULL,
	[Token] [nvarchar](200) NULL,
	[FechaAlta] [datetime] NULL,
	[FechaUpd] [datetime] NULL,
	[Activo] [bit] NULL,
 CONSTRAINT [PK_TblCuentaUsuario] PRIMARY KEY CLUSTERED 
(
	[IdCuentaUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Tb_PersonasFisicas] ON 

INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1, CAST(N'2021-04-06T00:00:00.000' AS DateTime), CAST(N'2021-04-06T00:00:00.000' AS DateTime), N'daniel floresadasd', N'lopezasdasd', N'floresasdasd', N'XAXXSD0101023', CAST(N'1996-08-07' AS Date), 1, 0)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (2, CAST(N'2021-04-06T21:36:18.867' AS DateTime), NULL, N'EDREY', N'LOPEZ', N'ESTEBA', N'XAXX010101023', CAST(N'2014-10-30' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1002, CAST(N'2021-04-08T10:29:22.823' AS DateTime), NULL, N'mariel', N'lopez', N'esteban', N'XAXX010121023', CAST(N'2021-04-30' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1003, CAST(N'2021-04-08T10:30:26.113' AS DateTime), NULL, N'chelo', N'flores', N'gomez', N'XAXX010101027', CAST(N'2021-04-04' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1004, CAST(N'2021-04-08T10:31:02.950' AS DateTime), NULL, N'julio', N'lopz', N'gomez', N'XAXX010101054', CAST(N'2021-04-04' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1005, CAST(N'2021-04-08T10:31:40.273' AS DateTime), NULL, N'chola', N'esteban', N'laines', N'	XAXX01010345', CAST(N'2021-04-10' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1006, CAST(N'2021-04-08T15:25:11.383' AS DateTime), NULL, N'test', N'test', N'tesst', N'XAXX010101052', CAST(N'2014-10-03' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1007, CAST(N'2021-04-08T16:45:39.587' AS DateTime), NULL, N'daniel flores', N'daniel flors', N'daniel', N'AXX010101054d', CAST(N'2021-04-27' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1008, CAST(N'2021-04-09T11:12:05.400' AS DateTime), NULL, N'asd', N'asdasd', N'asdasd', N'XAXX010101034', CAST(N'2021-04-30' AS Date), 1, 0)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1009, CAST(N'2021-04-09T11:15:48.727' AS DateTime), NULL, N'DASD', N'ASDASD', N'ASDASD', N'XAXX010101098', CAST(N'2021-04-16' AS Date), 1, 0)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1010, CAST(N'2021-04-10T10:13:58.190' AS DateTime), NULL, N'EDREY', N'estaban', N'estaennsns', N'XAXX010451023', CAST(N'2021-04-23' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1011, CAST(N'2021-04-10T11:20:50.200' AS DateTime), NULL, N'EDREY', N'LOPEZ', N'laines', N'XAXX010101052', CAST(N'2021-04-16' AS Date), 1, 1)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (1012, CAST(N'2021-04-10T11:34:20.630' AS DateTime), NULL, N'asdasdasd', N'asdasd', N'final', N'AXX010101054x', CAST(N'2021-04-22' AS Date), 1, 0)
INSERT [dbo].[Tb_PersonasFisicas] ([IdPersonaFisica], [FechaRegistro], [FechaActualizacion], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [RFC], [FechaNacimiento], [UsuarioAgrega], [Activo]) VALUES (2002, CAST(N'2021-04-11T09:48:00.563' AS DateTime), NULL, N'test final', N'test FINAL', N'FINAL', N'XDFX010101054', CAST(N'2021-04-14' AS Date), 1, 0)
SET IDENTITY_INSERT [dbo].[Tb_PersonasFisicas] OFF
GO
INSERT [dbo].[TblCuentaUsuario] ([IdCuentaUsuario], [Nombres], [Apellidos], [Correo], [Password], [IdRol], [Rol], [Token], [FechaAlta], [FechaUpd], [Activo]) VALUES (N'9204e48e-6194-43da-a635-378b93a4efa8', N'Juan daniel', N'Lopez Flores', N'admin@admin.com', N'123456', 1, N'administrador', NULL, CAST(N'2021-04-06T17:03:08.480' AS DateTime), NULL, 1)
GO
ALTER TABLE [dbo].[Tb_PersonasFisicas] ADD  CONSTRAINT [DF_Tb_PersonasFisicas_FechaRegistro]  DEFAULT (getdate()) FOR [FechaRegistro]
GO
ALTER TABLE [dbo].[Tb_PersonasFisicas] ADD  CONSTRAINT [DF_Tb_PersonasFisicas_Activo]  DEFAULT ((1)) FOR [Activo]
GO
/****** Object:  StoredProcedure [dbo].[sp_ActualizarPersonaFisica]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ActualizarPersonaFisica]
(
    @IdPersonaFisica INT,
    @Nombre VARCHAR(50),
    @ApellidoPaterno VARCHAR(50),
    @ApellidoMaterno VARCHAR(50),
    @RFC VARCHAR(13),
    @FechaNacimiento DATE,
    @UsuarioAgrega INT
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @ID INT,
            @ERROR VARCHAR(500);
    BEGIN TRY
        IF NOT EXISTS
        (
            SELECT *
            FROM dbo.Tb_PersonasFisicas
            WHERE IdPersonaFisica = @IdPersonaFisica
                  AND Activo = 1
        )
        BEGIN
            SELECT @ERROR = 'La persona fisica no existe.';
            THROW 50000, @ERROR, 1;
        END;

        UPDATE dbo.Tb_PersonasFisicas
        SET Nombre = @Nombre,
            ApellidoPaterno = @ApellidoPaterno,
            ApellidoMaterno = @ApellidoMaterno,
            RFC = @RFC,
            FechaNacimiento = @FechaNacimiento
        WHERE IdPersonaFisica = @IdPersonaFisica;
        SELECT @IdPersonaFisica AS ERROR,
               'Registro exitoso' AS MENSAJEERROR;
    END TRY
    BEGIN CATCH
        PRINT ERROR_MESSAGE();
        SELECT ERROR_NUMBER() * -1 AS ERROR,
               ISNULL(@ERROR, 'Error al actualizar el registro.') AS MENSAJEERROR;
    END CATCH;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_AgregarPersonaFisica]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- ===================================================================
CREATE PROCEDURE [dbo].[sp_AgregarPersonaFisica] (@Nombre VARCHAR(50),
@ApellidoPaterno VARCHAR(50),
@ApellidoMaterno VARCHAR(50),
@RFC VARCHAR(13),
@FechaNacimiento DATE,
@UsuarioAgrega INT)
AS
BEGIN
  SET NOCOUNT ON;
  DECLARE @ID INT
         ,@ERROR VARCHAR(500);
  BEGIN TRY
    IF LEN(@RFC) != 13
    BEGIN
      SELECT
        @ERROR = 'El RFC no es válido';
      THROW 50000, @ERROR, 1;
    END;
    IF EXISTS (SELECT
          *
        FROM dbo.Tb_PersonasFisicas
        WHERE RFC = @RFC
        AND Activo = 1)
    BEGIN
      SELECT
        @ERROR = 'El RFC ya existe en el sistema';
      THROW 50000, @ERROR, 1;
    END;

    INSERT INTO dbo.Tb_PersonasFisicas (FechaRegistro,
    FechaActualizacion,
    Nombre,
    ApellidoPaterno,
    ApellidoMaterno,
    RFC,
    FechaNacimiento,
    UsuarioAgrega,
    Activo)
      VALUES (GETDATE(),        -- FechaRegistro - datetime
      NULL,             -- FechaActualizacion - datetime
      @Nombre,          -- Nombre - varchar(50)
      @ApellidoPaterno, -- ApellidoPaterno - varchar(50)
      @ApellidoMaterno, -- ApellidoMaterno - varchar(50)
      @RFC,             -- RFC - varchar(13)
      @FechaNacimiento, -- FechaNacimiento - date
      @UsuarioAgrega,   -- UsuarioAgrega - int
      1                 -- Activo - bit
      );

    SELECT
      @ID = SCOPE_IDENTITY();
    SELECT
      @ID AS ERROR
     ,'Registro exitoso' AS MENSAJEERROR;
  END TRY
  BEGIN CATCH
    PRINT ERROR_MESSAGE();
    SELECT
      ERROR_NUMBER() * -1 AS ERROR
     ,ISNULL(@ERROR, 'Error al guardar el registro.') AS MENSAJEERROR;
  END CATCH;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_EliminarPersonaFisica]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[sp_EliminarPersonaFisica]
(@IdPersonaFisica INT)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @ID INT,
            @ERROR VARCHAR(500);
    BEGIN TRY
        IF NOT EXISTS
        (
            SELECT *
            FROM dbo.Tb_PersonasFisicas
            WHERE IdPersonaFisica = @IdPersonaFisica
                  AND Activo = 1
        )
        BEGIN
            SELECT @ERROR = 'La persona fisica no existe.';
            THROW 50000, @ERROR, 1;
        END;

        UPDATE dbo.Tb_PersonasFisicas
        SET Activo = 0
        WHERE IdPersonaFisica = @IdPersonaFisica;
		SELECT 1
    END TRY
    BEGIN CATCH
        PRINT ERROR_MESSAGE();
        SELECT ERROR_NUMBER() * -1 AS ERROR,
               ISNULL(@ERROR, 'Error al actualizar el registro.') AS MENSAJEERROR;
    END CATCH;
END;
GO
/****** Object:  StoredProcedure [dbo].[SPCID_Get_UsuarioByEmailAndPassword]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		DANIEL FLORES
-- Create date: 06/04/2021
-- Description:	LOGIN DE USUARIO
-- =============================================
CREATE PROCEDURE [dbo].[SPCID_Get_UsuarioByEmailAndPassword]
	-- Add the parameters for the stored procedure here
	@Correo NVARCHAR(100),
	@Password NVARCHAR(30),
	@IdRol INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	SELECT
		[IdCuentaUsuario],	
		[Nombres],
		[Apellidos],
		[Correo],
		[Password],
		[IdRol],
		[Rol],
		[Token]
	FROM [dbo].[TblCuentaUsuario]
	WHERE [IdRol] = @IdRol AND [Correo] = @Correo AND [Password] = @Password
END
GO
/****** Object:  StoredProcedure [dbo].[SPCID_GetAll_Person]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		DANIEL FLORES
-- Create date: 06/04/2021
-- Description:	OBTENER TODOS LOS REGISTROS ACTIVOS DE PERSONAS FISICAS
-- =============================================
CREATE PROCEDURE [dbo].[SPCID_GetAll_Person]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT  [IdPersonaFisica],
			[Nombre],
			[ApellidoPaterno],
			[ApellidoMaterno],
			[RFC],
			[FechaNacimiento]
	FROM [dbo].[Tb_PersonasFisicas] WHERE [Activo] = 1
    
END
GO
/****** Object:  StoredProcedure [dbo].[SPCID_GetById_Person]    Script Date: 11/04/2021 09:58:38 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		DANIEL FLORES
-- Create date: 06/04/2021
-- Description:	
-- =============================================
CREATE PROCEDURE [dbo].[SPCID_GetById_Person]
	@IdPersonaFisica		INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT  [IdPersonaFisica],
			[Nombre],
			[ApellidoPaterno],
			[ApellidoMaterno],
			[RFC],
			[FechaNacimiento]
	FROM [dbo].[Tb_PersonasFisicas] WHERE [IdPersonaFisica] = @IdPersonaFisica AND [Activo] = 1
    
END
GO
